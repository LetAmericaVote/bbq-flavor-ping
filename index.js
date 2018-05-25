module.exports = async function (use, menu) {
  return (context) => {
    const { response } = context;

    response.body = { ok: true };
  };
};
