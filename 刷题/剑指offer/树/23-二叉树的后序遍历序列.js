// 算法步骤如下：
// 1. 找到根结点；
// 2. 遍历序列，找到第一个大于等于根结点的元素i，则i左侧为左子树、i右侧为右子树；
// 3. 我们已经知道i左侧所有元素均小于根结点，那么再依次遍历右侧，看是否所有元素均大于根结点；若出现小于根结点的元素，则直接返回false；若右侧全都大于根结点，则：
// 4. 分别递归判断左/右子序列是否为后序序列；


function VerifySquenceOfBST(sequence) {
  if (!sequence.length) {
    return false
  }
  return check(sequence, 0, sequence.length);

  function check(sequence, start, end) {
    if (start >= end) {
      return true;
    }

    var root = sequence[end];
    var index = 0;
    while (sequence[index] < root) {
      ++index;
    }
    for (var i = index; i < end; i++) {
      if (sequence[i] < root) {
        return false;
      }
    }
    return check(sequence, 0, index - 1) && check(sequence, index + 1, end - 1);
  }
}

