export const getValueOf = (string) => {
    if (string === 'width') {
        return 'Width';
    }
    if (string === 'height') {
        return 'Height';
    }
    if (string === 'depth') {
        return 'Depth';
    }
    if (string === 'qualityChecking') {
        return 'Quality Checking';
    }
    if (string === 'freshnesDuration') {
        return 'Freshnes Duration'
    }
    return '';
}