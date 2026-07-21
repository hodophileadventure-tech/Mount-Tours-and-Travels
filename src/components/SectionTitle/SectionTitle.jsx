function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment = {
    center: 'mx-auto text-center',
    left: 'mr-auto text-left',
    right: 'ml-auto text-right',
  }[align]

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#4b5563]">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
