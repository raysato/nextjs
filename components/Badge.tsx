export const badgeThemes: {[key: string]: badgeProps} = {
    news: {
        style: "badge-neutral",
        value: "ニュース",
    },
    event: {
        style: "",
        value: "イベント",
    },
    valid: {
        style: "badge-success",
        value: "募集中",
    },
    invalid: {
        style: "badge-error",
        value: "期間外",
    }
}

export interface badgeProps {
    style: string
    value: string
}

export default function Badge ({badgeTheme}: {badgeTheme: string}) {
    const themeStyle = badgeThemes[badgeTheme] || {}
    return (
        <>
         <div className={`badge ${themeStyle.style}`}>{themeStyle.value}</div>
        </>
    )
  }