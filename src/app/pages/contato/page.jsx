import Link from 'next/link';

export default function Contato() {
  return (
    <div>
      <h1>Contato</h1>
      <p>
        <Link href="/pages/paginainicial">
             Inicio
        </Link>
        <Link href= "/" >
            Menu
        </Link>
      </p>
    </div>
  );
}