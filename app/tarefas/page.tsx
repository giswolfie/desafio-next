import Link from 'next/link';
export default async function Page({ searchParams }: { searchParams: Promise<{page?: string }> }) {
    const {page} = await searchParams;
    const pageValue = page || '1';
    const currentPage = parseInt(pageValue);
    const products = Array.from({ length: 10 }, (_, i) => {
        const id = (currentPage - 1) * 10 + i + 1;
        return `Tarefa ${id}`;
    });

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            <ul>
                {products.map((product, index) => (
                <li key={index} >{product}</li>
                ))}
            </ul>

            <div>
                {currentPage > 1 && (
                    <Link href={`/tarefas?page=${currentPage - 1}`}>
                        <button>Anterior</button>
                    </Link>
                )}
                <Link href={`/tarefas?page=${currentPage + 1}`}>
                    <button>Próxima</button>
                </Link>
            </div>
        </div>
    );
}