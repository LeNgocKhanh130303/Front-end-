import axios  from "axios";

const URL_user = "http://localhost:8080/api/user";

// export const GetUserbyID = (userId) => axios.get(URL_user + "/" +userId);

export const updateAccount = async (id, accountData) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/account/${id}`, accountData);
      return response.data;
    } catch (error) {
      console.error("Failed to update account:", error);
      throw error;
    }
  };


//ham fetchAll
export const fetchUserData = async () => {
    
    const accountsResponse = await axios.get('http://localhost:8080/api/account');
    const userDetailsResponse = await axios.get('http://localhost:8080/api/user');
  
    const accountsData = accountsResponse.data;
    const userDetailsData = userDetailsResponse.data;

    return { accountsData, userDetailsData };
  };

//ham meregeAll
export const mergeUserData = (accounts, users) => {
    return users.map(user => {
      const account = accounts.find(acc => acc.id === user.accountId);
      return {
        ...user,
        email: account.email,
        rankTypeId: account.rankTypeId,
        level: account.level,
      
      };
    });
  };

  //ham FetchOne 
  export const fetchUserDataById = async (id) => {
    try {
      const accountResponse = await axios.get(`http://localhost:8080/api/account/${id}`);
      const userDetailResponse = await axios.get(`http://localhost:8080/api/user/${id}`);
  
      const accountData = accountResponse.data;
      const userDetailData = userDetailResponse.data;
  
      return { accountData, userDetailData };
    } catch (error) {
      console.error("Failed to FETCHONE user data:", error);
      throw error;
    }
  };
  
  const getOneUser=[]

  //ham meregeOne
export const mergeOneUser = (accounts, users) => {
    return users.map(user => {
        const account = accounts.find(acc => acc.id === user.accountId);
        return {
          ...user,
          email: account.email,
          rankTypeId: account.rankTypeId,
          accountBalance: account.accountBalance,
          level: account.level,
        
        };
      });
    
  };
