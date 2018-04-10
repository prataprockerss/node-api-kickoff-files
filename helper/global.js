module.exports = {
    getResponse: function (status, msg, err = null, data = {}, mobile_msg = "") {
      return new Promise(resolve => {
        resolve({
          "status": status,
          "msg": msg,
          "mobile_msg": mobile_msg != "" ? mobile_msg : msg,
          "data": data,
          "err": err
        });
      });
    }
  }