const initialState = {
    scrollOptions: [
        {
            name: 'Опция',
            btnName: 'Действие',
        },
        {
            name: 'Опция отмены',
            btnName: 'Отменить',
        },
        {
            name: 'Опция',
            btnName: 'Действие',
        },
        {
            name: 'Опция ускорения',
            btnName: 'Ускориться',
        },
        {
            name: 'Опция радости',
            btnName: 'Начать радоваться',
        },
        {
            name: 'Опция',
            btnName: 'Действие',
        },
        {
            name: 'Опция',
            btnName: 'Действие',
        },
        {
            name: 'Опция покупки',
            btnName: 'Купить',
        },
        {
            name: 'Опция продажи',
            btnName: 'Продать',
        },
        {
            name: 'Опция',
            btnName: 'Действие',
        },
        {
            name: 'Какая-то опция',
            btnName: 'Сделать что-то',
        },
        {
            name: 'Опция',
            btnName: 'Действие',
        },
    ]
}

export const scrollReducer = (state = initialState, btnName) => {
    switch (btnName.type) {
        default:
            return state
    }
}
