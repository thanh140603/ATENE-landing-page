import { useI18n } from '../../../app/i18n/I18nContext'
import { LIVE_BOOKING_URL } from '../../../consts/links'
import styles from '../../../styles/booking.module.css'
import { useMemo, useState } from 'react'

type DayStatus = 'available' | 'few' | 'full' | 'inactive'

type CalendarDay = {
  d: number
  month: 6 | 7
  status: DayStatus
}

type CalendarCell = CalendarDay | null

const STATUS_LABEL_JA: Record<DayStatus, string> = {
  available: '空き',
  few: '残りわずか',
  full: '満枠',
  inactive: '',
}

const STATUS_LABEL_EN: Record<DayStatus, string> = {
  available: 'Open',
  few: 'Few left',
  full: 'Full',
  inactive: '',
}

const DAY_STATUS_CLASS: Record<DayStatus, string> = {
  available: 'day_available',
  few: 'day_few',
  full: 'day_full',
  inactive: 'day_inactive',
}

const DOT_STATUS_CLASS: Record<Exclude<DayStatus, 'inactive'>, string> = {
  available: 'dot_available',
  few: 'dot_few',
  full: 'dot_full',
}

export function LiveBookingSection() {
  const { locale } = useI18n()
  const [selected, setSelected] = useState<string | null>(null)

  const calendarDays = useMemo<CalendarCell[]>(
    () => [
      null,
      { d: 1, month: 6, status: 'inactive' },
      { d: 2, month: 6, status: 'inactive' },
      { d: 3, month: 6, status: 'inactive' },
      { d: 4, month: 6, status: 'inactive' },
      { d: 5, month: 6, status: 'inactive' },
      { d: 6, month: 6, status: 'inactive' },
      { d: 7, month: 6, status: 'inactive' },
      { d: 8, month: 6, status: 'inactive' },
      { d: 9, month: 6, status: 'inactive' },
      { d: 10, month: 6, status: 'inactive' },
      { d: 11, month: 6, status: 'inactive' },
      { d: 12, month: 6, status: 'inactive' },
      { d: 13, month: 6, status: 'inactive' },
      { d: 14, month: 6, status: 'inactive' },
      { d: 15, month: 6, status: 'inactive' },
      { d: 16, month: 6, status: 'inactive' },
      { d: 17, month: 6, status: 'inactive' },
      { d: 18, month: 6, status: 'inactive' },
      { d: 19, month: 6, status: 'inactive' },
      { d: 20, month: 6, status: 'available' },
      { d: 21, month: 6, status: 'few' },
      { d: 22, month: 6, status: 'available' },
      { d: 23, month: 6, status: 'available' },
      { d: 24, month: 6, status: 'few' },
      { d: 25, month: 6, status: 'available' },
      { d: 26, month: 6, status: 'available' },
      { d: 27, month: 6, status: 'few' },
      { d: 28, month: 6, status: 'available' },
      { d: 29, month: 6, status: 'few' },
      { d: 30, month: 6, status: 'full' },
      { d: 1, month: 7, status: 'available' },
      { d: 2, month: 7, status: 'few' },
      { d: 3, month: 7, status: 'available' },
      { d: 4, month: 7, status: 'available' },
    ],
    [],
  )

  const statusLabels = locale === 'ja' ? STATUS_LABEL_JA : STATUS_LABEL_EN

  return (
    <section id="booking" className="section section--tight section--dark">
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.eyebrow}>LIVE BOOKING</div>
          <h2 className="h2">{locale === 'ja' ? 'ライブ枠を予約' : 'Book your live slot'}</h2>
          <p className={`p ${styles.lead}`}>
            {locale === 'ja'
              ? '6月20日～7月4日の期間中、配信希望日を選択してください。枠には限りがあり、先着順でのご案内となります。日付を選ぶと、空いている時間が表示されます。'
              : 'Between June 20 and July 4, choose your preferred live date. Slots are limited and allocated first-come, first-served. Available times appear when you select a date.'}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.calendarCard} aria-label="Live booking calendar">
            <div className={styles.calendarTop}>
              <div className={styles.monthHeader}>2026 / 06 - 07</div>
              <div className={styles.legendRow}>
                <span className={styles.legendItem}>
                  <span className={`${styles.dot} ${styles.dotAvailable}`} />
                  {locale === 'ja' ? '空きあり' : 'Available'}
                </span>
                <span className={styles.legendItem}>
                  <span className={`${styles.dot} ${styles.dotFew}`} />
                  {locale === 'ja' ? '残りわずか' : 'Few left'}
                </span>
                <span className={styles.legendItem}>
                  <span className={`${styles.dot} ${styles.dotFull}`} />
                  {locale === 'ja' ? '満枠' : 'Full'}
                </span>
              </div>
            </div>

            <div className={styles.weekdays} aria-hidden="true">
              {['日', '月', '火', '水', '木', '金', '土'].map((w) => (
                <div key={w}>{w}</div>
              ))}
            </div>

            <div className={styles.calendarGrid}>
              {calendarDays.map((cell, idx) => {
                if (!cell) return <div key={`empty-${idx}`} className={styles.dayEmpty} />

                const { d, month, status } = cell
                const key = `${month}-${d}`
                const isSelectable = status !== 'full' && status !== 'inactive'
                const isSelected = selected === key

                return (
                  <button
                    key={key}
                    type="button"
                    className={[
                      styles.dayCell,
                      styles[DAY_STATUS_CLASS[status] as keyof typeof styles],
                      isSelected ? styles.daySelected : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => isSelectable && setSelected(key)}
                    disabled={!isSelectable}
                  >
                    <span className={styles.dayNum}>{d}</span>
                    {status !== 'inactive' ? (
                      <span
                        className={`${styles.dayDot} ${styles[DOT_STATUS_CLASS[status] as keyof typeof styles]}`}
                      />
                    ) : null}
                    {status !== 'inactive' ? (
                      <span className={styles.dayStatus}>{statusLabels[status]}</span>
                    ) : null}
                  </button>
                )
              })}
            </div>
          </div>

          <div className={styles.selectCard} aria-label="Selected date panel">
            <div className={styles.selectBody}>
              <div className={styles.selectTitle}>
                {locale === 'ja' ? '日付を選択してください' : 'Select your date'}
              </div>
              <div className={styles.selectHint}>
                {locale === 'ja'
                  ? '左のカレンダーから配信希望日をタップ'
                  : 'Tap your preferred date on the calendar on the left.'}
              </div>
            </div>

            <button
              className={`${styles.reserveBtn} ${selected ? styles.reserveBtnActive : ''}`}
              type="button"
              disabled={!selected}
              onClick={() => window.open(LIVE_BOOKING_URL, '_blank', 'noopener,noreferrer')}
            >
              {locale === 'ja' ? 'この枠を予約する' : 'Reserve this slot'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
