import style from "../styles/style.module.scss";

export type ProjectListHeaderProps = {
    title?: string | undefined;
    subTitle?: string | undefined;
    colors?: string[] | undefined;
}

export const ProjectListHeader = ({
    title,
    subTitle,
    colors
}: ProjectListHeaderProps) => {

    const colorSpans = (colors ?? []).map(color => (
        <span className={style.color} style={{
            backgroundColor: color
        }} />
    ));

    return (
        <div className={style.project_list_header}>
            {
                colorSpans.length > 0 && (
                    <div className={style.colors}>
                        { colorSpans }
                    </div>
                )
            }

            <div className={style.title}>
                { title }
            </div>

            <div className={style.sub_title}>
                { subTitle }
            </div>
        </div>
    );
}

