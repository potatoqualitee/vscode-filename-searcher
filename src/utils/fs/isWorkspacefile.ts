export const isWorkspacefile = (path: string, scheme: string) => {
  if (scheme === 'file') {
    return true;
  }

  return false;
};
