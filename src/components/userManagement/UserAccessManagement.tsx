import React, { useState, useEffect } from 'react';
import {
  AppUser,
  UserRole,
  UserStatus,
  UserPermissions,
  INITIAL_USERS,
  DEFAULT_PERMISSIONS,
} from '../../types/userAccess';
import {
  Users,
  UserPlus,
  Shield,
  ShieldCheck,
  Edit2,
  Trash2,
  Search,
  CheckCircle2,
  XCircle,
  Key,
  GraduationCap,
  School,
  Lock,
  Unlock,
  AlertTriangle,
  RotateCcw,
  Check,
  X,
  UserCheck,
} from 'lucide-react';

interface UserAccessManagementProps {
  currentUser: AppUser;
  onSwitchUser: (user: AppUser) => void;
  onClose?: () => void;
}

const STORAGE_KEY = 'fiqihmapk_users_v1';

export function UserAccessManagement({
  currentUser,
  onSwitchUser,
  onClose,
}: UserAccessManagementProps) {
  // Load users from localStorage or default
  const [users, setUsers] = useState<AppUser[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading users:', e);
    }
    return INITIAL_USERS;
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Error saving users:', e);
    }
  }, [users]);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | UserRole>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | UserStatus>('all');

  // Modal states: 'create' | 'edit' | 'delete' | null
  const [activeModal, setActiveModal] = useState<'create' | 'edit' | 'delete' | null>(null);
  const [selectedUser, setSelectedUser] = useState<AppUser | null>(null);

  // Form State
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    permissions: UserPermissions;
  }>({
    name: '',
    email: '',
    role: 'siswa',
    status: 'active',
    permissions: DEFAULT_PERMISSIONS.siswa,
  });

  const [formError, setFormError] = useState<string | null>(null);

  // Open Create Modal
  const handleOpenCreate = () => {
    setFormData({
      name: '',
      email: '',
      role: 'siswa',
      status: 'active',
      permissions: { ...DEFAULT_PERMISSIONS.siswa },
    });
    setFormError(null);
    setActiveModal('create');
  };

  // Open Edit Modal
  const handleOpenEdit = (user: AppUser) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      permissions: { ...user.permissions },
    });
    setFormError(null);
    setActiveModal('edit');
  };

  // Open Delete Modal
  const handleOpenDelete = (user: AppUser) => {
    setSelectedUser(user);
    setActiveModal('delete');
  };

  // When role changes in form, update default permissions if desired
  const handleRoleChange = (newRole: UserRole) => {
    setFormData((prev) => ({
      ...prev,
      role: newRole,
      permissions: { ...DEFAULT_PERMISSIONS[newRole] },
    }));
  };

  // Submit Create
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Nama lengkap wajib diisi.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Alamat email tidak valid.');
      return;
    }
    // Check email uniqueness
    if (users.some((u) => u.email.toLowerCase() === formData.email.toLowerCase())) {
      setFormError('Email sudah terdaftar untuk pengguna lain.');
      return;
    }

    const newUser: AppUser = {
      id: `usr-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      role: formData.role,
      status: formData.status,
      permissions: formData.permissions,
      lastActive: 'Baru dibuat',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setUsers((prev) => [newUser, ...prev]);
    setActiveModal(null);
  };

  // Submit Edit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    if (!formData.name.trim()) {
      setFormError('Nama lengkap wajib diisi.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Alamat email tidak valid.');
      return;
    }
    // Check email uniqueness (except current user)
    if (
      users.some(
        (u) =>
          u.id !== selectedUser.id &&
          u.email.toLowerCase() === formData.email.toLowerCase()
      )
    ) {
      setFormError('Email sudah digunakan oleh pengguna lain.');
      return;
    }

    const updatedUser: AppUser = {
      ...selectedUser,
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      role: formData.role,
      status: formData.status,
      permissions: formData.permissions,
    };

    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? updatedUser : u))
    );

    // If current logged-in user is updated, sync it
    if (currentUser.id === selectedUser.id) {
      onSwitchUser(updatedUser);
    }

    setActiveModal(null);
    setSelectedUser(null);
  };

  // Submit Delete
  const handleDeleteSubmit = () => {
    if (!selectedUser) return;
    if (selectedUser.id === currentUser.id) {
      alert('Anda tidak dapat menghapus akun yang sedang Anda gunakan.');
      return;
    }

    setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    setActiveModal(null);
    setSelectedUser(null);
  };

  // Reset to Default Users
  const handleResetData = () => {
    if (
      window.confirm(
        'Kembalikan daftar pengguna dan hak akses ke pengaturan default awal?'
      )
    ) {
      setUsers(INITIAL_USERS);
      onSwitchUser(INITIAL_USERS[0]);
    }
  };

  // Filtered list
  const filteredUsers = users.filter((u) => {
    const matchRole = roleFilter === 'all' || u.role === roleFilter;
    const matchStatus = statusFilter === 'all' || u.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.role.toLowerCase().includes(q);

    return matchRole && matchStatus && matchQuery;
  });

  const adminCount = users.filter((u) => u.role === 'admin').length;
  const guruCount = users.filter((u) => u.role === 'guru').length;
  const siswaCount = users.filter((u) => u.role === 'siswa').length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Manajemen Akses & Hak Pengguna (CRUD)</span>
            </div>
            <h1 className="text-2xl font-bold text-stone-900 font-serif mt-1">
              Pengaturan Hak Akses & Peran Pengguna FiqihMAPK
            </h1>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl leading-relaxed">
              Kelola data pengguna, hak cipta akses pembelajaran, peran (*Admin, Guru, Siswa*), serta wewenang modul simulasi dan kuis dengan model <strong>Create, Read, Update, Delete</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleOpenCreate}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-2 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>Tambah User Baru</span>
            </button>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-xl border border-stone-200 transition-colors"
              >
                Kembali ke Materi
              </button>
            )}
          </div>
        </div>

        {/* Current Active User Status Bar */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs bg-stone-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-600">Sesi Akun Saat Ini:</span>
            <span className="font-bold text-stone-900">{currentUser.name}</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                currentUser.role === 'admin'
                  ? 'bg-rose-100 text-rose-800 border border-rose-300'
                  : currentUser.role === 'guru'
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}
            >
              {currentUser.role}
            </span>
          </div>

          <div className="text-stone-500 text-[11px]">
            *Gunakan tombol <strong>"Gunakan Akun Ini"</strong> pada tabel untuk mencoba sudut pandang peran lain.
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
            Total Pengguna
          </span>
          <div className="text-2xl font-bold text-stone-900 font-serif">
            {users.length}
          </div>
          <span className="text-[10px] text-stone-400">Terdaftar di sistem lokal</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-rose-200/80 shadow-xs space-y-1 bg-rose-50/20">
          <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider">
            Admin (Penuh)
          </span>
          <div className="text-2xl font-bold text-rose-900 font-serif">
            {adminCount}
          </div>
          <span className="text-[10px] text-rose-600">Hak kelola akun & materi</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-xs space-y-1 bg-amber-50/20">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
            Guru Fiqih
          </span>
          <div className="text-2xl font-bold text-amber-900 font-serif">
            {guruCount}
          </div>
          <span className="text-[10px] text-amber-600">Hak edit materi & kuis</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-xs space-y-1 bg-emerald-50/20">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
            Siswa MAPK
          </span>
          <div className="text-2xl font-bold text-emerald-900 font-serif">
            {siswaCount}
          </div>
          <span className="text-[10px] text-emerald-600">Hak akses belajar & simulator</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari pengguna (nama, email, role)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Role & Status Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1 text-xs">
              <span className="text-stone-500 font-semibold text-[11px]">Peran:</span>
              {(['all', 'admin', 'guru', 'siswa'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRoleFilter(r)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                    roleFilter === r
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                  }`}
                >
                  {r === 'all' ? 'Semua' : r.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 text-xs ml-auto md:ml-2">
              <button
                type="button"
                onClick={handleResetData}
                title="Reset data ke bawaan awal"
                className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table (READ) */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Pengguna</th>
                <th className="py-3 px-4">Peran (Role)</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Wewenang / Hak Akses</th>
                <th className="py-3 px-4">Terdaftar</th>
                <th className="py-3 px-4 text-right">Aksi (CRUD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-400">
                    Tidak ada data pengguna yang sesuai dengan pencarian atau filter.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const isCurrent = currentUser.id === user.id;

                  return (
                    <tr
                      key={user.id}
                      className={`hover:bg-stone-50/80 transition-colors ${
                        isCurrent ? 'bg-emerald-50/30' : ''
                      }`}
                    >
                      {/* Name & Email */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 font-bold flex items-center justify-center shrink-0 text-xs uppercase">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-stone-900 flex items-center gap-1.5">
                              <span>{user.name}</span>
                              {isCurrent && (
                                <span className="bg-emerald-600 text-white text-[9px] px-1.5 py-0.2 rounded font-semibold">
                                  Anda
                                </span>
                              )}
                            </div>
                            <span className="text-stone-500 text-[11px] font-mono">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide inline-flex items-center gap-1 ${
                            user.role === 'admin'
                              ? 'bg-rose-100 text-rose-900 border border-rose-200'
                              : user.role === 'guru'
                              ? 'bg-amber-100 text-amber-900 border border-amber-200'
                              : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                          }`}
                        >
                          <Shield className="w-3 h-3" />
                          <span>{user.role}</span>
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3 px-4">
                        {user.status === 'active' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Aktif</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] text-stone-400 font-semibold">
                            <XCircle className="w-3.5 h-3.5 text-stone-400" />
                            <span>Nonaktif</span>
                          </span>
                        )}
                      </td>

                      {/* Permissions Summary */}
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {user.permissions.canManageUsers && (
                            <span className="px-1.5 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded text-[9px]">
                              Kelola User
                            </span>
                          )}
                          {user.permissions.canEditMaterials && (
                            <span className="px-1.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded text-[9px]">
                              Edit Materi
                            </span>
                          )}
                          {user.permissions.canAccessSimulators && (
                            <span className="px-1.5 py-0.5 bg-sky-50 text-sky-700 border border-sky-200 rounded text-[9px]">
                              Simulator
                            </span>
                          )}
                          {user.permissions.canTakeQuiz && (
                            <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[9px]">
                              Kuis
                            </span>
                          )}
                          <span className="px-1.5 py-0.5 bg-stone-100 text-stone-600 border border-stone-200 rounded text-[9px]">
                            {user.permissions.accessibleFase.length} Fase
                          </span>
                        </div>
                      </td>

                      {/* Created */}
                      <td className="py-3 px-4 text-stone-500 text-[11px] font-mono">
                        {user.createdAt}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          {/* Switch User Button */}
                          <button
                            type="button"
                            onClick={() => onSwitchUser(user)}
                            title="Gunakan akun ini untuk simulasi hak akses"
                            className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                              isCurrent
                                ? 'bg-emerald-700 text-white pointer-events-none'
                                : 'bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 border border-stone-200'
                            }`}
                          >
                            <UserCheck className="w-3 h-3" />
                            <span className="hidden lg:inline">
                              {isCurrent ? 'Aktif' : 'Simulasi'}
                            </span>
                          </button>

                          {/* Edit Button */}
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(user)}
                            title="Ubah data & hak akses"
                            className="p-1 rounded text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Delete Button */}
                          <button
                            type="button"
                            onClick={() => handleOpenDelete(user)}
                            title="Hapus pengguna"
                            disabled={isCurrent}
                            className="p-1 rounded text-stone-400 hover:text-rose-600 hover:bg-rose-50 disabled:opacity-30 disabled:hover:text-stone-400 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL CREATE / EDIT */}
      {(activeModal === 'create' || activeModal === 'edit') && (
        <div className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xl max-w-lg w-full p-6 space-y-4 my-8 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-700" />
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  {activeModal === 'create' ? 'Tambah Pengguna Baru' : 'Ubah Pengguna & Hak Akses'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form
              onSubmit={activeModal === 'create' ? handleCreateSubmit : handleEditSubmit}
              className="space-y-4 text-xs"
            >
              {/* Name */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-700 block">Nama Lengkap:</label>
                <input
                  type="text"
                  placeholder="Misal: Ahmad Zaky, S.Pd.I"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="font-semibold text-stone-700 block">Alamat Email:</label>
                <input
                  type="email"
                  placeholder="Misal: zaky@madrasah.sch.id"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  required
                />
              </div>

              {/* Role & Status */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-stone-700 block">Peran / Role:</label>
                  <select
                    value={formData.role}
                    onChange={(e) => handleRoleChange(e.target.value as UserRole)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="siswa">Siswa (Peserta Didik)</option>
                    <option value="guru">Guru (Pendidik Fiqih)</option>
                    <option value="admin">Administrator (Penuh)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-700 block">Status Akun:</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as UserStatus })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="active">Aktif</option>
                    <option value="inactive">Nonaktif</option>
                  </select>
                </div>
              </div>

              {/* Permissions Checklist */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                <span className="font-bold text-stone-800 block text-xs">
                  Rincian Izin Hak Akses (Custom Permissions):
                </span>

                <div className="space-y-2 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.permissions.canManageUsers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          permissions: {
                            ...formData.permissions,
                            canManageUsers: e.target.checked,
                          },
                        })
                      }
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-stone-700 font-medium">
                      Boleh Mengelola Akun User (CRUD User)
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.permissions.canEditMaterials}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          permissions: {
                            ...formData.permissions,
                            canEditMaterials: e.target.checked,
                          },
                        })
                      }
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-stone-700 font-medium">
                      Boleh Mengedit Materi & Soal Latihan
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.permissions.canAccessSimulators}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          permissions: {
                            ...formData.permissions,
                            canAccessSimulators: e.target.checked,
                          },
                        })
                      }
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-stone-700 font-medium">
                      Akses Simulator (Kalkulator Waris, Wasiat, Zakat, dll)
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.permissions.canTakeQuiz}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          permissions: {
                            ...formData.permissions,
                            canTakeQuiz: e.target.checked,
                          },
                        })
                      }
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-stone-700 font-medium">
                      Boleh Mengerjakan Kuis & Latihan Soal
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg shadow-xs"
                >
                  {activeModal === 'create' ? 'Simpan Pengguna' : 'Perbarui Pengguna'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DELETE CONFIRMATION */}
      {activeModal === 'delete' && selectedUser && (
        <div className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xl max-w-sm w-full p-6 space-y-4 animate-in fade-in zoom-in duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-bold text-stone-900 text-base">Hapus Pengguna?</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Apakah Anda yakin ingin menghapus akun <strong>{selectedUser.name}</strong> ({selectedUser.email})? Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg w-full"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleDeleteSubmit}
                className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-lg shadow-xs w-full"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
