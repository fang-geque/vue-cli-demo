import request from "./request";

const testHttpBin = async (params) => {
  const res = await request({
    url: "/get",
    params: {
      name: "ws",
      age: 18,
    },
  });
  console.log(res);
  return res;
};

function testHttpBinPost(data) {
  return request({
    url: "/post",
    method:'post',
    data: {
      name: "ws",
      age: 20,
    },
  });
}

export { testHttpBin, testHttpBinPost };
