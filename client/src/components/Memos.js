import { useState, useEffect } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  let count=1;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "50px", color: "whitesmoke", fontWeight: 400, fontSize: 25}}>DONATIONS</p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "5px",
              
              }}
            >
              <tbody>
                <tr>
                <td
                    style={{
                      backgroundColor: " #1a2e4d",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "10px",
                      width: "25px",
                      color: "whitesmoke"

                    }}
                  >
                    {count++}.
                  </td>
                  <td
                    style={{
                      backgroundColor: " #1a2e4d",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "10px",
                      width: "150px",
                      color: "whitesmoke"

                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: " #1a2e4d",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "200px",
                      color: "whitesmoke"

                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: " #1a2e4d",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "10px",
                      width: "200px",
                      color: "whitesmoke"

                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: " #1a2e4d",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                      color: "whitesmoke"

                    }}
                  >
                    {(memo.amount/10**18).toLocaleString()} ETH
                  </td>
                  <td
                    style={{
                      backgroundColor: " #1a2e4d",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "10px",
                      width: "300px",
                      color: "whitesmoke"
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
export default Memos;
