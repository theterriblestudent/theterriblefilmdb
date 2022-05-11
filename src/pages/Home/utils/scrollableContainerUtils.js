export function handleTitleButtonClick(variant, text, target, setState, theme, title, buttons) {
    setState(variant);
    title.current.innerText = text;
    buttons.current.querySelectorAll("button").forEach(button => {
        button.style.color = theme.colors.textLight;
        button.style.borderColor = theme.colors.textLight;
    });
    target.style.color = theme.colors.clrAccent;
    target.style.borderColor = theme.colors.clrAccent;
}