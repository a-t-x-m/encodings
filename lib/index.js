'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const encodings = {
    utf8: {
        list: 'UTF-8',
        status: 'UTF-8',
        posixOnly: false
    },
    utf16le: {
        list: 'UTF-16 LE',
        status: 'UTF-16 LE',
        posixOnly: false
    },
    utf16be: {
        list: 'UTF-16 BE',
        status: 'UTF-16 BE',
        posixOnly: false
    },
    windows1252: {
        list: 'Western (Windows 1252)',
        status: 'Windows 1252',
        posixOnly: false
    },
    iso88591: {
        list: 'Western (ISO 8859-1)',
        status: 'ISO 8859-1',
        posixOnly: false
    },
    iso88593: {
        list: 'Western (ISO 8859-3)',
        status: 'ISO 8859-3',
        posixOnly: false
    },
    iso885915: {
        list: 'Western (ISO 8859-15)',
        status: 'ISO 8859-15',
        posixOnly: false
    },
    macroman: {
        list: 'Western (Mac Roman)',
        status: 'Mac Roman',
        posixOnly: false
    },
    cp437: {
        list: 'DOS (CP 437)',
        status: 'CP437',
        posixOnly: false
    },
    cp850: {
        list: 'DOS (CP 850)',
        status: 'CP850',
        posixOnly: false
    },
    windows1256: {
        list: 'Arabic (Windows 1256)',
        status: 'Windows 1256',
        posixOnly: false
    },
    iso88596: {
        list: 'Arabic (ISO 8859-6)',
        status: 'ISO 8859-6',
        posixOnly: false
    },
    windows1257: {
        list: 'Baltic (Windows 1257)',
        status: 'Windows 1257',
        posixOnly: false
    },
    iso88594: {
        list: 'Baltic (ISO 8859-4)',
        status: 'ISO 8859-4',
        posixOnly: false
    },
    windows1250: {
        list: 'Central European (Windows 1250)',
        status: 'Windows 1250',
        posixOnly: false
    },
    iso88592: {
        list: 'Central European (ISO 8859-2)',
        status: 'ISO 8859-2',
        posixOnly: false
    },
    windows1251: {
        list: 'Cyrillic (Windows 1251)',
        status: 'Windows 1251',
        posixOnly: false
    },
    cp866: {
        list: 'Cyrillic (CP 866)',
        status: 'CP 866',
        posixOnly: false
    },
    iso88595: {
        list: 'Cyrillic (ISO 8859-5)',
        status: 'ISO 8859-5',
        posixOnly: false
    },
    koi8r: {
        list: 'Cyrillic (KOI8-R)',
        status: 'KOI8-R',
        posixOnly: false
    },
    koi8u: {
        list: 'Cyrillic (KOI8-U)',
        status: 'KOI8-U',
        posixOnly: false
    },
    iso885913: {
        list: 'Estonian (ISO 8859-13)',
        status: 'ISO 8859-13',
        posixOnly: false
    },
    windows1253: {
        list: 'Greek (Windows 1253)',
        status: 'Windows 1253',
        posixOnly: false
    },
    iso88597: {
        list: 'Greek (ISO 8859-7)',
        status: 'ISO 8859-7',
        posixOnly: false
    },
    windows1255: {
        list: 'Hebrew (Windows 1255)',
        status: 'Windows 1255',
        posixOnly: false
    },
    iso88598: {
        list: 'Hebrew (ISO 8859-8)',
        status: 'ISO 8859-8',
        posixOnly: false
    },
    iso885916: {
        list: 'Romanian (ISO 8859-16)',
        status: 'ISO 8859-16',
        posixOnly: false
    },
    windows1254: {
        list: 'Turkish (Windows 1254)',
        status: 'Windows 1254',
        posixOnly: false
    },
    iso88599: {
        list: 'Turkish (ISO 8859-9)',
        status: 'ISO 8859-9',
        posixOnly: false
    },
    windows1258: {
        list: 'Vietnamese (Windows 1254)',
        status: 'Windows 1254',
        posixOnly: false
    },
    gbk: {
        list: 'Chinese (GBK)',
        status: 'GBK',
        posixOnly: false
    },
    gb18030: {
        list: 'Chinese (GB18030)',
        status: 'GB18030',
        posixOnly: false
    },
    cp950: {
        list: 'Traditional Chinese (Big5)',
        status: 'Big5',
        posixOnly: false
    },
    big5hkscs: {
        list: 'Traditional Chinese (Big5-HKSCS)',
        status: 'Big5-HKSCS',
        posixOnly: false
    },
    shiftjis: {
        list: 'Japanese (Shift JIS)',
        status: 'Shift JIS',
        posixOnly: false
    },
    cp932: {
        list: 'Japanese (CP 932)',
        status: 'CP 932',
        posixOnly: false
    },
    eucjp: {
        list: 'Japanese (EUC-JP)',
        status: 'EUC-JP',
        posixOnly: false
    },
    euckr: {
        list: 'Korean (EUC-KR)',
        status: 'EUC-KR',
        posixOnly: false
    },
    iso885914: {
        list: 'Celtic (ISO 8859-14)',
        status: 'ISO 8859-14',
        posixOnly: true
    },
    iso885910: {
        list: 'Nordic (ISO 8859-10)',
        status: 'ISO 8859-10',
        posixOnly: true
    }
};
exports.encodings = encodings;
function getActiveTextEditorEncoding() {
    var _a, _b, _c;
    const editorEncoding = (_c = (_b = (_a = atom) === null || _a === void 0 ? void 0 : _a.workspace) === null || _b === void 0 ? void 0 : _b.getActiveTextEditor()) === null || _c === void 0 ? void 0 : _c.getEncoding();
    const currentEncoding = encodings[editorEncoding];
    currentEncoding['internal'] = editorEncoding;
    return currentEncoding;
}
exports.getActiveTextEditorEncoding = getActiveTextEditorEncoding;
//# sourceMappingURL=index.js.map