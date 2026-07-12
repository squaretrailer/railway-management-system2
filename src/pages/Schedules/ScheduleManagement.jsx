import { useState } from "react";
import { useSchedules, useAddSchedule, useUpdateSchedule, useDeleteSchedule, useStations } from "../../hooks";
import ScheduleTable from "../../components/schedule/ScheduleTable";
import ScheduleForm from "../../components/schedule/ScheduleForm";
import PlatformAssignment from "../../components/schedule/PlatformAssignment";
import Modal from "../../components/common/Modal/Modal";
import Button from "../../components/common/Button/Button";
import { toast } from "react-hot-toast";

function ScheduleManagement() {
  const { data: schedules, isLoading } = useSchedules();
  const { data: stations } = useStations();
  const addSchedule = useAddSchedule();
  const updateSchedule = useUpdateSchedule();
  const deleteSchedule = useDeleteSchedule();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [activeTab, setActiveTab] = useState("list");

  const handleAdd = (data) => {
    addSchedule.mutate(data, {
      onSuccess: () => {
        toast.success("Schedule added successfully");
        setIsFormOpen(false);
      },
      onError: (err) => toast.error(err.message || "Failed to add schedule"),
    });
  };

  const handleUpdate = (data) => {
    if (!editingSchedule) return;
    updateSchedule.mutate(
      { id: editingSchedule.id, data },
      {
        onSuccess: () => {
          toast.success("Schedule updated successfully");
          setIsFormOpen(false);
          setEditingSchedule(null);
        },
        onError: (err) => toast.error(err.message || "Failed to update schedule"),
      }
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      deleteSchedule.mutate(id, {
        onSuccess: () => toast.success("Schedule deleted successfully"),
        onError: (err) => toast.error(err.message || "Failed to delete schedule"),
      });
    }
  };

  const handleAssignPlatform = ({ scheduleId, platform }) => {
    updateSchedule.mutate(
      { id: scheduleId, data: { platform } },
      {
        onSuccess: () => toast.success(`Platform ${platform} assigned successfully`),
        onError: (err) => toast.error(err.message || "Failed to assign platform"),
      }
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-amber-400 uppercase tracking-widest font-semibold">Schedule Management</p>
          <h2 className="text-3xl font-bold text-white mt-2">Train Schedules</h2>
        </div>
        <Button onClick={() => { setEditingSchedule(null); setIsFormOpen(true); }}>
          Add Schedule
        </Button>
      </div>

      <div className="flex gap-4 border-b border-gray-800">
        <button
          onClick={() => setActiveTab("list")}
          className={`py-2 px-4 font-medium transition ${activeTab === "list" ? "text-amber-400 border-b-2 border-amber-400" : "text-gray-400 hover:text-white"}`}
        >
          Schedule List
        </button>
        <button
          onClick={() => setActiveTab("platform")}
          className={`py-2 px-4 font-medium transition ${activeTab === "platform" ? "text-amber-400 border-b-2 border-amber-400" : "text-gray-400 hover:text-white"}`}
        >
          Platform Assignment
        </button>
      </div>

      {activeTab === "list" ? (
        <ScheduleTable
          schedules={schedules || []}
          loading={isLoading}
          onDelete={handleDelete}
        />
      ) : (
        <PlatformAssignment
          schedules={schedules || []}
          stations={stations || []}
          onAssign={handleAssignPlatform}
        />
      )}

      <Modal
        isOpen={isFormOpen}
        onClose={() => { setIsFormOpen(false); setEditingSchedule(null); }}
        title={editingSchedule ? "Edit Schedule" : "Add Schedule"}
      >
        <ScheduleForm
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          initialData={editingSchedule}
          isSubmitting={addSchedule.isPending || updateSchedule.isPending}
          isEditing={!!editingSchedule}
        />
      </Modal>
    </div>
  );
}

export default ScheduleManagement;