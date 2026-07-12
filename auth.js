// auth.js – middleware for json-server

module.exports = (req, res, next) => {
  // ─── Login ──────────────────────────────────────────────────
  if (req.method === 'POST' && req.path === '/login') {
    return res.json({
      user: {
        id: 1,
        name: 'Admin User',
        email: 'admin@railms.com',
        role: 'admin'
      },
      accessToken: 'fake-jwt-token',
      refreshToken: 'fake-refresh-token'
    });
  }

  // ─── Get current user ─────────────────────────────────────
  if (req.method === 'GET' && req.path === '/me') {
    return res.json({
      id: 1,
      name: 'Admin User',
      email: 'admin@railms.com',
      role: 'admin'
    });
  }

  // ─── Refresh token ────────────────────────────────────────
  if (req.method === 'POST' && req.path === '/refresh') {
    return res.json({
      accessToken: 'new-fake-token',
      refreshToken: 'new-fake-refresh'
    });
  }

  // ─── Logout ────────────────────────────────────────────────
  if (req.method === 'POST' && req.path === '/logout') {
    return res.status(200).json({ message: 'Logged out' });
  }

  // ─── Register ──────────────────────────────────────────────
  if (req.method === 'POST' && req.path === '/register') {
    return res.status(201).json({
      user: {
        id: 2,
        name: req.body.name || 'New User',
        email: req.body.email || 'new@example.com',
        role: 'user'
      }
    });
  }

  // ─── All other routes go to json-server ──────────────────
  next();
};