export default function SkillBadge({skillName}) {
  return (
    <span className="inline-flex items-center rounded-md bg-black bg-opacity-10 px-2 py-1 text-md font-medium text-black ring-1 ring-inset ring-black/10">
        {skillName}
    </span>
  )
}
