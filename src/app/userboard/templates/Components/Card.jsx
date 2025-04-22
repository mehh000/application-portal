
import React from 'react'
import ApplicationComponent from '../../new-application/component/Application'

function Card() {
    return (
        <div className="w-full sm:w-[300px] h-[420px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Application Preview */}
            <div className="h-[340px] overflow-y-auto">
                <ApplicationComponent />
            </div>

            {/* Footer */}
            <div className="w-full border-t p-3 bg-slate-50">
                <p className="text-sm text-gray-700 font-medium">
                    Leave of absence for fever
                </p>
            </div>
        </div>
    )
}

export default Card