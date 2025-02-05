export function getTreeTotalChilds({ children = [] }) {
  let totalCount = 0;

  children.map((child) => {
    totalCount++;

    if (child.children && child.children.length)
      totalCount += getTreeTotalChilds(child);
  });

  return totalCount;
}
