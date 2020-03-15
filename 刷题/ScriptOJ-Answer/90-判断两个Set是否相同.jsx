// 考查利用如果两个set相等，合并后和合并前的size一定相等

const isSameSet = (s1, s2) => {
    const s = new Set([...s1,...s2]);
    return s.size === s1.size && s.size === s2.size;
}

