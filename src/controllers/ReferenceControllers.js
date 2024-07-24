const {
    getAllReferenceQuery,
  } = require("../queries/ReferenceQueries");
  
  const { jwt } = require("../shared/shared");
  
  const getAllReference = async (req, res, next) => {
    console.log("getAllReference");
    const returnReferenceData = await getAllReferenceQuery();
    res.send(returnReferenceData);
  };
    
  module.exports = {
    getAllReference,
  };
  