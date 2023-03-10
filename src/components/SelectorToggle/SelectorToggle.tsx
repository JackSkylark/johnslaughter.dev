import style from "./style.module.scss";

export type SelectorToggleProps = {
    items: string[];
    selected?: string;
    onSelect?: (item: string) => void;
}

export const SelectorToggle = ({
    items,
    selected,
    onSelect
}: SelectorToggleProps) => {
    return (
        <div className={style.toggle_group}>
            { items.length > 0 && items.map(item => (
                <div 
                    key={item}
                    className={style.toggle_button}
                    onClick={() => onSelect && onSelect(item)}
                    style={{
                        borderColor: selected === item ? "initial" : undefined,
                    }} />
            ))}
        </div>
    )
}
