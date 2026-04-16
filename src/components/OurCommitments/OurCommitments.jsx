import './OurCommitments.css'

function OurCommitments() {
  return (
    <div className="CommitmentSection">
      <div className="CommitmentContainer">
        <div className="Stats">
          <div className="StatBox">
            <p className="StatNumber">245%</p>
            <p className="StatText">More revenues for the brand</p>
          </div>

          <div className="StatBox">
            <p className="StatNumber">130K+</p>
            <p className="StatText">Audiences reached</p>
          </div>

          <div className="StatBox">
            <p className="StatNumber">50+</p>
            <p className="StatText">Brands trust us</p>
          </div>

          <div className="StatBox">
            <p className="StatNumber">24+</p>
            <p className="StatText">Worldwide Awards</p>
          </div>
        </div>

        <div className="CommitmentContent">
          <p className="CommitmentTitle">Commitments</p>
          <p className="CommitmentText">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <p className="LearnMore">Learn More &rarr;</p>
        </div>
      </div>
    </div>
  )
}

export default OurCommitments
