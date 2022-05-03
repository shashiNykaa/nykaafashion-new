const BASE_URL = process.env.BASE_URL;

export const apiCall: ApiCall = async (method, endpoint, body) => {
  try {
    const response = await fetch(`${endpoint}`, {
      method,
      headers: {},
      body: JSON.stringify(resolveBody(body)),
    });
    const jsonResponse = await response.json();
    console.log('json resonse', jsonResponse);
    return jsonResponse;
  } catch (err) {
    console.log(err, `ERROR in API CALL`);
    return { errors: [new Error("Error in api call"), err] };
  }
};


const resolveBody = (body:any) => {
    const nullifyobj = (obj:any) => {
        if(obj instanceof Object && obj.constructor === Object) {
            Object.keys(obj).forEach((key) => {
                if (obj[key] === '') {
                    obj[key] = null;
                };
            });
        }
    };
    if(Array.isArray(body)) {
        body.forEach((b)=>{
            nullifyobj(b);
        });
    }
    else {
        nullifyobj(body);
    }
};