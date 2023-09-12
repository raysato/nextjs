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
    style: string
    value: string
}

export default function Badge ({badgeTheme}: {badgeTheme: badgeProps}) {

    return (
        // <div className={`badge ${badgeTheme.style}`}>{badgeTheme.value}</div> // イケない
        <div className={`badge ${badgeThemes.news.style}`}>{badgeThemes.news.value}</div> //イケる
    )
  }