import { ethers } from "ethers";
const Buy = ({ state }) => {
  const acceptAmount = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = document.querySelector("#amount").value;

    console.log(name, message, contract);
    const amountwei = { value: ethers.utils.parseEther(amount) };
    const transaction = await contract.pay(name, message, amountwei);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "5px", paddingTop: 5 }}>
        <form onSubmit={acceptAmount}>
          <div className="mb-3">
            <label className="form-label" style={{color: "whitesmoke"}}>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{color: "whitesmoke"}}>Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{color: "whitesmoke"}}>Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter the amount"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Donate
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
