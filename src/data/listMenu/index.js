import React from 'react';
import { IconSettings, IconEditProfile, IconSecurity, IconHelpSupport } from "../../assets";

export const listMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <IconEditProfile />,
    halaman: 'EditProfile'
  },
  {
    id: 2,
    nama: 'Settings',
    gambar: <IconSettings />,
    halaman: 'Settings'
  },
  {
    id: 3,
    nama: 'Kebijakan Privasi',
    gambar: <IconSecurity />,
    halaman: 'KebijakanPrivasi'
  },
  {
    id: 4,
    nama: 'Help & Support',
    gambar: <IconHelpSupport />,
    halaman: 'HelpSupport'
  },
];