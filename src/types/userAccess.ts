export type UserRole = 'admin' | 'guru' | 'siswa';
export type UserStatus = 'active' | 'inactive';

export interface UserPermissions {
  canManageUsers: boolean;
  canEditMaterials: boolean;
  canAccessSimulators: boolean;
  canTakeQuiz: boolean;
  canViewPustaka: boolean;
  accessibleFase: ('fase_e_10' | 'fase_f_11' | 'fase_f_12')[];
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  permissions: UserPermissions;
  avatarUrl?: string;
  lastActive: string;
  createdAt: string;
}

export const DEFAULT_PERMISSIONS: Record<UserRole, UserPermissions> = {
  admin: {
    canManageUsers: true,
    canEditMaterials: true,
    canAccessSimulators: true,
    canTakeQuiz: true,
    canViewPustaka: true,
    accessibleFase: ['fase_e_10', 'fase_f_11', 'fase_f_12'],
  },
  guru: {
    canManageUsers: false,
    canEditMaterials: true,
    canAccessSimulators: true,
    canTakeQuiz: true,
    canViewPustaka: true,
    accessibleFase: ['fase_e_10', 'fase_f_11', 'fase_f_12'],
  },
  siswa: {
    canManageUsers: false,
    canEditMaterials: false,
    canAccessSimulators: true,
    canTakeQuiz: true,
    canViewPustaka: true,
    accessibleFase: ['fase_e_10', 'fase_f_11', 'fase_f_12'],
  },
};

export const INITIAL_USERS: AppUser[] = [
  {
    id: 'usr-1',
    name: 'Samhadi Ifriandi Putra',
    email: 'samhadiip85@gmail.com',
    role: 'admin',
    status: 'active',
    permissions: DEFAULT_PERMISSIONS.admin,
    lastActive: 'Baru saja',
    createdAt: '2026-01-15',
  },
  {
    id: 'usr-2',
    name: 'Ustadz Ahmad Fauzi, M.Pd.I',
    email: 'ahmad.fauzi@mapk-madrasah.sch.id',
    role: 'guru',
    status: 'active',
    permissions: DEFAULT_PERMISSIONS.guru,
    lastActive: '10 menit yang lalu',
    createdAt: '2026-02-01',
  },
  {
    id: 'usr-3',
    name: 'Muhammad Ilham Pratama',
    email: 'ilham.siswa@mapk-madrasah.sch.id',
    role: 'siswa',
    status: 'active',
    permissions: DEFAULT_PERMISSIONS.siswa,
    lastActive: '1 jam yang lalu',
    createdAt: '2026-03-10',
  },
  {
    id: 'usr-4',
    name: 'Siti Nur Aisyah',
    email: 'aisyah.siswa@mapk-madrasah.sch.id',
    role: 'siswa',
    status: 'active',
    permissions: DEFAULT_PERMISSIONS.siswa,
    lastActive: 'Kemarin',
    createdAt: '2026-03-12',
  },
];
