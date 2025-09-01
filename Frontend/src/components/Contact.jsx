export default function Contact() {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="text-2xl font-semibold mb-2">Contact</div>
      <a href="mailto:kmthomas.official@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out" target="_blank" className="text-blue-400 font-semibold cursor-pointer hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4 ml-2 mb-2">
        kmthomas.official@gmail.com
      </a>
      <div className="flex">
        <a href="https://github.com/kthomasuf" target="_blank" className="cursor-pointer opacity-80 hover:opacity-100 hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4 ml-2 mb-2">
          Github
        </a>
        <a href="https://linkedin.com/in/kenneth-thomas-3083b728b" target="_blank" className="cursor-pointer opacity-80 hover:opacity-100 hover:underline hover:decoration-red-500 hover:decoration-2 hover:underline-offset-4 ml-4 mb-2">
          LinkedIn
        </a>        
      </div>
    </div>
  )
}