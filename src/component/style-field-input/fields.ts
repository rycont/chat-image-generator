export enum StylePropertyType {
    COLOR = 'color',
    NUMBER = 'number',
    SELECT = 'select',
    GEOMETRIC_SIZE = 'geometric_size',
}

interface StyleFieldBase {
    label: string
    type: StylePropertyType
    datalistId?: string
}

export type StyleField = StyleFieldBase

export const STYLE_FIELDS: Record<string, StyleField> = {
    'background-color': {
        label: '배경 색',
        type: StylePropertyType.COLOR,
    },
    color: {
        label: '글자 색',
        type: StylePropertyType.COLOR,
    },
    'border-radius': {
        label: '모서리 둥글기',
        type: StylePropertyType.NUMBER,
    },
    'font-size': {
        label: '글자 크기',
        type: StylePropertyType.NUMBER,
    },
    padding: {
        label: '가장자리 여백',
        type: StylePropertyType.NUMBER,
    },
    'border-width': {
        label: '테두리 두께',
        type: StylePropertyType.NUMBER,
    },
    'border-color': {
        label: '테두리 색',
        type: StylePropertyType.COLOR,
    },
    'border-style': {
        label: '테두리 스타일',
        type: StylePropertyType.SELECT,
        datalistId: createDatalist(['solid', 'dotted', 'dashed']),
    },
    width: {
        label: '너비',
        type: StylePropertyType.GEOMETRIC_SIZE,
        datalistId: createDatalist(['fit-content', 'max-content', '채우기']),
    },
    height: {
        label: '높이',
        type: StylePropertyType.GEOMETRIC_SIZE,
    },
    'font-weight': {
        label: '글자 굵기',
        type: StylePropertyType.SELECT,
        datalistId: createDatalist([
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
        ]),
    },
    gap: {
        label: '간격',
        type: StylePropertyType.NUMBER,
    },
}

function createDatalist(options: string[]) {
    const datalist = document.createElement('datalist')
    datalist.id = crypto.randomUUID()

    for (const option of options) {
        const optionElement = document.createElement('option')

        optionElement.value = option

        datalist.appendChild(optionElement)
    }

    document.body.appendChild(datalist)

    return datalist.id
}

interface TypeConfig {
    type: string
    toStyleValue: (value: string) => string
}

export const FIELD_TYPES: Record<StylePropertyType, TypeConfig> = {
    [StylePropertyType.COLOR]: {
        type: 'color',
        toStyleValue: (value) => {
            return value
        },
    },
    [StylePropertyType.NUMBER]: {
        type: 'number',
        toStyleValue: (value) => {
            return `${value}px`
        },
    },
    [StylePropertyType.SELECT]: {
        type: 'text',
        toStyleValue: (value) => {
            return value
        },
    },
    [StylePropertyType.GEOMETRIC_SIZE]: {
        type: 'numeric',
        toStyleValue: (value) => {
            const isNumeric = !isNaN(Number(value))

            if (isNumeric) {
                return `${value}px`
            }

            return value
        },
    },
}
