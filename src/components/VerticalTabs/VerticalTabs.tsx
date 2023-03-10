import style from "./VerticalTabs.module.scss";

export type VerticalTabsProps = {
    tabName: string;
    items: {
        title: string;
        content: React.ReactNode
    }[]
}

export const VerticalTabs = ({
    tabName,
    items
}: VerticalTabsProps) => {    

    return (
        <div className={style.vertical_tabs}>
            {
                items.map((_, i) => <input type="radio" name={tabName} id={`${tabName}-${i}`} checked={i === 0 } onChange={() => {}}/>)
            }          

            <div className={style.titles}>
                { items.map(x => <div className={style.title}> {x.title} </div>) }
            </div> 

            <div className={style.tab_wrapper}>
                <div className={style.toggle_group}>
                    {
                        items.map((_, i) => (
                            <label className={style.toggle_button} htmlFor={`${tabName}-${i}`}/>
                        ))
                    }
                </div>
                <div className={style.content_group}>
                    {
                        items.map((x) => (
                            <div className={style.content}>
                                { x.content }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
    
}
