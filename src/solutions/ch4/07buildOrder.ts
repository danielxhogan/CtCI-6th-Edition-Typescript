export class GraphNode {
    public value: string;
    public dependants: GraphNode[];
    public dependancies: number;
    public built: boolean;

    constructor(value: string) {
        this.value = value;
        this.dependants = [];
        this.dependancies = 0;
        this.built = false;
    }
}

export function buildOrder(projects: GraphNode[]): GraphNode[] | null {
    let projectsInOrder: GraphNode[] = [];

    for (const project of projects) {
        if (!project.built) {
            findBuildOrder(project, projectsInOrder);
        }
    }

    if (projectsInOrder.length !== projects.length) {
        return null;
    }

    return projectsInOrder;
}

function findBuildOrder(
    project: GraphNode,
    projectsInOrder: GraphNode[],
    recursively = false
) {
    if (recursively) {
        project.dependancies--;
    }

    if (project.dependancies === 0) {
        projectsInOrder.push(project);
        project.built = true;

        for (const proj of project.dependants) {
            if (!proj.built) {
                findBuildOrder(proj, projectsInOrder, true);
            }
        }
    }
}
