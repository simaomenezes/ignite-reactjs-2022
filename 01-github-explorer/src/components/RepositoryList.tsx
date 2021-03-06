import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
interface Repositoty {
    id: string;
    name: string;
    description: string;
    html_url: string;
}
export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repositoty[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
    return (
        <section className="repository-list">
            <h1>Repositoty of List</h1>
            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem key={repository.id} repository={repository} />
                    })
                }
            </ul>
        </section>
    );
}