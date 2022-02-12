import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
    descLink: 'LInk para github'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repositoty of List</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}