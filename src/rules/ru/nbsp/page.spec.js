tests.push(['ru/nbsp/page', [
    ['На стр. 22', 'На стр.\u00A022'],
    ['На стр.22', 'На стр.\u00A022'],
    ['\nстр.22', '\nстр.\u00A022'],
    [')стр.22', ')стр.\u00A022'],
    ['Стр.22', 'Стр.\u00A022'],
    ['в гл. 2', 'в гл.\u00A02'],
    ['вокруг рис. 7', 'вокруг рис.\u00A07'],
    ['у илл. 5', 'у илл.\u00A05']
]]);
