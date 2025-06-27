import Link from 'next/link';

export default function Inicio() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>
        <Link href="/pages/contato">
             contato
        </Link>
        <Link href= "/" >
            Menu
        </Link>
      </p>
    </div>
  );
}