export const badgeThemes = {
    news: {
        style: "badge-neutral",
        value: "ニュース",
    },
    event: {
        style: "",
        value: "イベント",
    }
}

export interface badgeProps {
    badgeTheme: string,
}

export default function Badge({badgeTheme}: badgeProps) {
    const selectedTheme = badgeThemes[badgeTheme];
    return (
        <div className={`badge ${selectedTheme.style}`}>{selectedTheme.value}</div>
    )
  }