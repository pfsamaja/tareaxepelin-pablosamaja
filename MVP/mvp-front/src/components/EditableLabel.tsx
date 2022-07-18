import { mdiCheck, mdiPencil, mdiSync } from '@mdi/js'
import Icon from '@mdi/react'
import { PropsWithChildren, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { TextField } from '@mui/material'

interface Props<T> {
  onSubmit: (value: T) => Promise<void>
  value: T
  className?: string
  labelClassName?: string
  id: string
  label: string
  notificationMessage?: string
  permissions?: Permissions[]
  fullwidth?: boolean
  canEdit?: () => Promise<boolean>
}

const EditableLabel: <T = string>(
  p: PropsWithChildren<Props<T>>
) => React.ReactElement = ({
  onSubmit,
  className,
  labelClassName,
  value,
  id,
  fullwidth,
}) => {
  const isEditing = true
  const [isOver, setIsOver] = useState(false)
  const [editing, setEditing] = useState(false)
  const [inputValue, , handleChange] = useForm({ [id]: value })
  const [loading, setLoading] = useState(false)

  const allowEdit = isEditing

  return (
    <div
      className={className ?? 'w-full flex items-center'}
      onMouseOver={() => !isOver && setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onKeyDown={(e) => {
        e.key === 'Escape' && setEditing(false)
      }}
    >
      {(!allowEdit || !editing) && (
        <div className={labelClassName ?? 'flex items-center'}>{value as unknown as String}</div>
      )}
      {allowEdit && editing && (
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            setLoading(true)
            await onSubmit(inputValue[id])
            setLoading(false)
            setEditing(false)
          }}
        >
          <TextField
            size="small"
            id={id}
            name={id}
            value={inputValue[id]}
            onChange={handleChange}
            fullWidth={fullwidth ?? false}
          ></TextField>
        </form>
      )}
      {allowEdit && isOver ? (
        loading ? (
          <div className="w-7 ml-2">
            <Icon
              className="w-5 text-primary transition-opacity opacity-70 cursor-pointer hover:opacity-100"
              path={mdiSync}
              spin
            ></Icon>
          </div>
        ) : (
          <div
            className="w-7 ml-2"
            onClick={async () => {
              if (editing) {
                setLoading(true)
                await onSubmit(inputValue[id])

                setLoading(false)
                setEditing(false)
              } else {
                setEditing(true)
              }
            }}
          >
            <Icon
              className="w-5 text-primary transition-opacity opacity-70 cursor-pointer hover:opacity-100"
              path={editing ? mdiCheck : mdiPencil}
            ></Icon>
          </div>
        )
      ) : (
        <div className="w-7 ml-2 h-5"></div>
      )}
    </div>
  )
}
export default EditableLabel
