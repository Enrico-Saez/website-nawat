import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
	columns: {
		id: column.number({ primaryKey: true, autoIncrement: true }),
		url: column.text({ unique: true }),
		name: column.text(),
		entry_date: column.date(),
		departure_date: column.date()
	}
});

const Session = defineTable({
	columns: {
	  id: column.text({ primaryKey: true }),
	  expiresAt: column.date(),
	  userId: column.number({
		references: () => User.columns.id,
	  }),
	},
  });

const RecruitmentProcess = defineTable({
	columns: {
		id: column.number({ primaryKey: true, autoIncrement: true }),
		name: column.text({}),
		link: column.text({ unique: true }),
		isActive: column.boolean()
	}
});

export default defineDb({
	tables: { User, Session, RecruitmentProcess }
});
