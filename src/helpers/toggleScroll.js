export function toggleScroll(){
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}