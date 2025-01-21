// 첫글자만 대문자로 바꾸기
const getStandardName = (name: string) => {
  return (
    name?.slice(0, 1).toUpperCase() + name?.slice(1, name.length).toLowerCase()
  );
};

export default getStandardName;
