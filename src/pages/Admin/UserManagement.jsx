import { useState } from "react";
import { useUsers, useAddUser, useUpdateUser, useDeleteUser } from "../../hooks";
import Modal from "../../components/common/Modal/Modal";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import { validateUserForm } from "../../utils/validators";
import { toast } from "react-hot-toast";

function UserManagement() {
  const { data: users, isLoading } = useUsers();
  const addUser = useAddUser();
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "", status: "active" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateUserForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    if (editingUser) {
      updateUser.mutate(
        { id: editingUser.id, data: form },
        {
          onSuccess: () => {
            toast.success("User updated");
            setIsModalOpen(false);
            setEditingUser(null);
            setForm({ name: "", email: "", role: "", status: "active" });
            setErrors({});
            setIsSubmitting(false);
          },
          onError: (err) => {
            toast.error(err.message);
            setIsSubmitting(false);
          },
        }
      );
    } else {
      addUser.mutate(form, {
        onSuccess: () => {
          toast.success("User added");
          setIsModalOpen(false);
          setForm({ name: "", email: "", role: "", status: "active" });
          setErrors({});
          setIsSubmitting(false);
        },
        onError: (err) => {
          toast.error(err.message);
          setIsSubmitting(false);
        },
      });
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setForm(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      deleteUser.mutate(id, {
        onSuccess: () => toast.success("User deleted"),
        onError: (err) => toast.error(err.message),
      });
    }
  };

  const openAddModal = () => {
    setEditingUser(null);
    setForm({ name: "", email: "", role: "", status: "active" });
    setErrors({});
    setIsModalOpen(true);
  };

  if (isLoading) return <div className="text-gray-400">Loading users...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-amber-400 uppercase tracking-widest font-semibold">Admin Panel</p>
          <h2 className="text-3xl font-bold text-white mt-2">User Management</h2>
          <p className="text-gray-400 mt-2">Manage staff accounts and system access.</p>
        </div>
        <Button onClick={openAddModal}>Add User</Button>
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-gray-400 text-xs uppercase">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 text-white">{user.name}</td>
                <td className="px-6 py-4 text-gray-400">{user.email}</td>
                <td className="px-6 py-4 text-gray-400 capitalize">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === "active" ? "bg-green-600" :
                    user.status === "pending" ? "bg-yellow-600" :
                    "bg-red-600"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <Button size="sm" variant="secondary" onClick={() => handleEdit(user)}>Edit</Button>
                  <Button size="sm" variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingUser(null);
          setErrors({});
        }}
        title={editingUser ? "Edit User" : "Add User"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Role *</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-amber-500 outline-none"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="agent">Agent</option>
              <option value="support">Support</option>
            </select>
            {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Status *</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-amber-500 outline-none"
              required
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && <p className="text-red-400 text-xs mt-1">{errors.status}</p>}
          </div>
          <Button type="submit" isLoading={isSubmitting} fullWidth>
            {editingUser ? "Update" : "Add"} User
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default UserManagement;