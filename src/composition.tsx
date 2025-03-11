export const formatString = (arr: string[]): string => {
    if (!arr || arr.length === 0) {
      return '';
    }
    const joinedString = arr.join(', '); 
    const formattedString = joinedString.charAt(0).toUpperCase() + joinedString.slice(1).toLowerCase();
    return formattedString;
};