'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ titulo }) => {
  return (
    <header>
      <h1>{titulo}</h1>
    <nav>
        <Link href="/pages/paginainicial">Início</Link>
        <Link href="/pages/contato">Contato</Link>
    </nav>
    </header>
  );
};

export default Header;
