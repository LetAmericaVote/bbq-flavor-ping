module.exports = async function (use, menu, logger) {
  return async (context) => {
    logger.debug = 'hey';

    const { response } = context;
    response.body = { ok: true };

    return true;
  };
};
