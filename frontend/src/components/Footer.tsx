const Footer = () => {
  return (
    <div className="bg-[url('/footer.jpg')] bg-cover bg-bottom">
        <div className="flex flex-col items-center justify-center pt-40 pb-80">
            <h1 className="text-4xl font-bold text-black">Ready to get started?</h1>
            <p className="text-black">Get in touch or create an account.</p>
            <div className="flex flex-row gap-5 mt-5">
            <button className="bg-white text-black py-2 px-4 rounded-lg">Contact Us</button>
            <button className="bg-white text-black py-2 px-4 rounded-lg">Create Account</button>
            </div>
        </div>
    </div>
  )
}

export default Footer