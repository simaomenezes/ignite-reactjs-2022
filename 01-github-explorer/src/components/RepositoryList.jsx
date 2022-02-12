import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
    descLink: 'LInk para github'
}
// https://api.github.com/orgs/rocketseat/repos
export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
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