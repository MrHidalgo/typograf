tests.push(['common/space/squareBracket', [
    [
        ' [ ] ',
        ' [] '
    ],
    [
        '\n\n[ \n\n ]\n\n',
        '\n\n[\n\n]\n\n'
    ],
    [
        '     [    abc     abc         ]     [    abc     ]   [ a [ b [ c ]  ]  ]    ',
        '     [abc     abc]     [abc]   [a [b [c]]]    '
    ]
]]);
