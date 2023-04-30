export function handleTitleButtonClick(variant, text, target, setState, theme, title, buttons) {
    setState(variant);
    title.current.innerText = text;
    buttons.current.querySelectorAll("button").forEach(button => {
        button.style.color = theme.colors.light_text;
        button.style.borderColor = theme.colors.light_text;
    });
    target.style.color = theme.colors.accent;
    target.style.borderColor = theme.colors.accent;
}
