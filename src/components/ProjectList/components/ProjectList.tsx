import { ProjectListHeader, ProjectListHeaderProps } from "./ProjectListHeader";
import styles from "../styles/style.module.scss";

export type ProjectListProps = ProjectListHeaderProps & {
}

export const ProjectList = ({
    title,
    subTitle,
    colors
}: ProjectListProps) => {

    return (
        <div className={styles.project_list}>
            <ProjectListHeader 
                title={title}
                subTitle={subTitle}
                colors={colors}
            />
        </div>
    );
}

